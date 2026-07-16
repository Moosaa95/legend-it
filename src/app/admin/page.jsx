'use client';

import { useState, useEffect, useRef } from 'react';

const COLLECTIONS = [
  { id: 'blog', name: 'Blog Posts' },
  { id: 'locations', name: 'Locations' },
  { id: 'industries', name: 'Industries' },
  { id: 'services', name: 'Services' }
];

const CORRECT_PASSCODE = 'itlegends2026';

export default function AdminPage() {
  const [passcode, setPasscode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [showPasscodeText, setShowPasscodeText] = useState(false);

  // Workspace state
  const [selectedCollection, setSelectedCollection] = useState('blog');
  const [items, setItems] = useState({});
  const [counts, setCounts] = useState({ blog: 0, locations: 0, industries: 0, services: 0 });
  const [loadingItems, setLoadingItems] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Active item state
  const [activeSlug, setActiveSlug] = useState(null);
  const [isNew, setIsNew] = useState(false);
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    description: '',
    body: '',
    jsonLds: '[]',
    styles: '[]'
  });

  // Mode: edit or preview
  const [editMode, setEditMode] = useState('editor'); // 'editor' or 'preview'
  
  // Save / Delete status
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });
  const [submitting, setSubmitting] = useState(false);

  // Textarea reference for snippet injection
  const textareaRef = useRef(null);

  // Check auth on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('admin_passcode');
    if (savedKey === CORRECT_PASSCODE) {
      setIsAuthorized(true);
      setPasscode(savedKey);
      loadAllCounts(savedKey);
    }
  }, []);

  // Fetch items when collection changes
  useEffect(() => {
    if (isAuthorized) {
      fetchCollection();
    }
  }, [isAuthorized, selectedCollection]);

  const loadAllCounts = async (authPasscode) => {
    const cols = ['blog', 'locations', 'industries', 'services'];
    const newCounts = { blog: 0, locations: 0, industries: 0, services: 0 };
    
    await Promise.all(
      cols.map(async (col) => {
        try {
          const res = await fetch(`/api/content?collection=${col}`, {
            headers: { 'x-admin-passcode': authPasscode }
          });
          if (res.ok) {
            const data = await res.json();
            newCounts[col] = Object.keys(data).length;
          }
        } catch (e) {
          console.error('Failed to load count for', col, e);
        }
      })
    );
    setCounts(newCounts);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === CORRECT_PASSCODE) {
      localStorage.setItem('admin_passcode', passcode);
      setIsAuthorized(true);
      setLoginError('');
      loadAllCounts(passcode);
      setStatusMsg({ type: 'success', text: 'Access granted!' });
    } else {
      setLoginError('Incorrect passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_passcode');
    setIsAuthorized(false);
    setPasscode('');
    setActiveSlug(null);
    setItems({});
    setCounts({ blog: 0, locations: 0, industries: 0, services: 0 });
  };

  const fetchCollection = async () => {
    setLoadingItems(true);
    setStatusMsg({ type: '', text: '' });
    try {
      const res = await fetch(`/api/content?collection=${selectedCollection}`, {
        headers: { 'x-admin-passcode': passcode }
      });
      if (res.ok) {
        const data = await res.json();
        setItems(data);
        // Default to first item if available
        const slugs = Object.keys(data);
        if (slugs.length > 0) {
          selectItem(slugs[0], data[slugs[0]]);
        } else {
          handleNewItem();
        }
      } else {
        const err = await res.json();
        setStatusMsg({ type: 'error', text: err.error || 'Failed to fetch collection.' });
      }
    } catch (e) {
      setStatusMsg({ type: 'error', text: 'Error fetching collection items.' });
    } finally {
      setLoadingItems(false);
    }
  };

  const selectItem = (slug, data) => {
    setActiveSlug(slug);
    setIsNew(false);
    setStatusMsg({ type: '', text: '' });
    setFormData({
      slug: slug,
      title: data.title || '',
      description: data.description || '',
      body: data.body || '',
      jsonLds: JSON.stringify(data.jsonLds || [], null, 2),
      styles: JSON.stringify(data.styles || [], null, 2)
    });
  };

  const handleNewItem = () => {
    setActiveSlug(null);
    setIsNew(true);
    setStatusMsg({ type: '', text: '' });
    setFormData({
      slug: '',
      title: '',
      description: '',
      body: '<main id="main-content">\n  <section class="section">\n    <div class="container">\n      <h2>New Heading</h2>\n      <p>Write your body HTML content here...</p>\n    </div>\n  </section>\n</main>',
      jsonLds: '[\n  {\n    "@context": "https://schema.org",\n    "@type": "WebPage"\n  }\n]',
      styles: '[]'
    });
  };

  const handleFieldChange = (field, val) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: val };
      if (field === 'title' && isNew) {
        next.slug = val
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .substring(0, 50);
      }
      return next;
    });
  };

  // Inject HTML snippet into the textarea
  const insertSnippet = (snippet) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = formData.body;
    const before = text.substring(0, start);
    const after = text.substring(end, text.length);

    const newBody = before + snippet + after;
    handleFieldChange('body', newBody);

    // Reposition cursor
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + snippet.length;
    }, 50);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.slug.trim()) {
      setStatusMsg({ type: 'error', text: 'Slug cannot be blank.' });
      return;
    }

    setSubmitting(true);
    setStatusMsg({ type: '', text: '' });

    try {
      let parsedJsonLds = [];
      let parsedStyles = [];
      try {
        parsedJsonLds = JSON.parse(formData.jsonLds);
      } catch (e) {
        setStatusMsg({ type: 'error', text: 'Invalid Schema JSON. Must be a valid JSON array.' });
        setSubmitting(false);
        return;
      }
      try {
        parsedStyles = JSON.parse(formData.styles);
      } catch (e) {
        setStatusMsg({ type: 'error', text: 'Invalid Styles JSON.' });
        setSubmitting(false);
        return;
      }

      const savePayload = {
        collection: selectedCollection,
        slug: formData.slug,
        data: {
          title: formData.title,
          description: formData.description,
          body: formData.body,
          jsonLds: parsedJsonLds,
          styles: parsedStyles
        }
      };

      const res = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-passcode': passcode
        },
        body: JSON.stringify(savePayload)
      });

      if (res.ok) {
        setStatusMsg({ type: 'success', text: 'Changes saved successfully!' });
        
        // Update local items state
        const updatedItems = { ...items };
        updatedItems[formData.slug] = savePayload.data;
        setItems(updatedItems);
        
        // Clean old slug if modified
        if (!isNew && activeSlug !== formData.slug) {
          await deleteOldSlug(activeSlug, false);
        }
        
        setActiveSlug(formData.slug);
        setIsNew(false);
        loadAllCounts(passcode);
      } else {
        const err = await res.json();
        setStatusMsg({ type: 'error', text: err.error || 'Failed to save changes.' });
      }
    } catch (err) {
      setStatusMsg({ type: 'error', text: 'Connection error while saving.' });
    } finally {
      setSubmitting(false);
    }
  };

  const deleteOldSlug = async (slugToDelete, reloadList = true) => {
    try {
      await fetch('/api/content', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-passcode': passcode
        },
        body: JSON.stringify({ collection: selectedCollection, slug: slugToDelete })
      });
      
      if (reloadList) {
        const updatedItems = { ...items };
        delete updatedItems[slugToDelete];
        setItems(updatedItems);
        const remainingKeys = Object.keys(updatedItems);
        if (remainingKeys.length > 0) {
          selectItem(remainingKeys[0], updatedItems[remainingKeys[0]]);
        } else {
          handleNewItem();
        }
        loadAllCounts(passcode);
      }
    } catch (e) {
      console.error('Failed to clean old slug', e);
    }
  };

  const handleDelete = async () => {
    if (isNew) {
      handleNewItem();
      return;
    }

    if (!window.confirm(`Are you sure you want to permanently delete "${activeSlug}"?`)) {
      return;
    }

    setSubmitting(true);
    setStatusMsg({ type: '', text: '' });

    try {
      const res = await fetch('/api/content', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-passcode': passcode
        },
        body: JSON.stringify({ collection: selectedCollection, slug: activeSlug })
      });

      if (res.ok) {
        setStatusMsg({ type: 'success', text: 'Item deleted.' });
        const updated = { ...items };
        delete updated[activeSlug];
        setItems(updated);
        const keys = Object.keys(updated);
        if (keys.length > 0) {
          selectItem(keys[0], updated[keys[0]]);
        } else {
          handleNewItem();
        }
        loadAllCounts(passcode);
      } else {
        const err = await res.json();
        setStatusMsg({ type: 'error', text: err.error || 'Failed to delete.' });
      }
    } catch (e) {
      setStatusMsg({ type: 'error', text: 'Error connecting to server.' });
    } finally {
      setSubmitting(false);
    }
  };

  const filteredKeys = Object.keys(items).filter((k) =>
    k.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (items[k].title && items[k].title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // LOCK SCREEN RENDER
  if (!isAuthorized) {
    return (
      <div className="admin-lock-screen">
        <style dangerouslySetInnerHTML={{ __html: `
          .admin-lock-screen {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #060814 0%, #151122 100%);
            font-family: 'Outfit', sans-serif;
            color: #ffffff;
            padding: 1.5rem;
          }
          .lock-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 24px;
            padding: 3rem 2.2rem;
            width: 100%;
            max-width: 420px;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(20px);
            text-align: center;
            transition: transform 0.3s;
          }
          .lock-card:hover {
            transform: translateY(-2px);
          }
          .lock-card h1 {
            font-size: 2rem;
            font-weight: 800;
            margin-top: 0;
            margin-bottom: 0.5rem;
            letter-spacing: -0.02em;
            background: linear-gradient(120deg, #ffffff 30%, #a1a1aa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .lock-card p {
            color: #94a3b8;
            font-size: 0.9rem;
            margin-bottom: 2.2rem;
            line-height: 1.5;
          }
          .input-container {
            position: relative;
            margin-bottom: 1.5rem;
          }
          .lock-form input {
            width: 100%;
            padding: 0.95rem 2.8rem 0.95rem 1.2rem;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: #ffffff;
            font-size: 1rem;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.25s, box-shadow 0.25s;
            text-align: center;
            letter-spacing: 0.05em;
          }
          .lock-form input:focus {
            border-color: #e63946;
            box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.15);
          }
          .toggle-pwd-btn {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            color: #64748b;
            cursor: pointer;
            font-size: 1.1rem;
            padding: 0;
            display: flex;
            align-items: center;
          }
          .toggle-pwd-btn:hover {
            color: #94a3b8;
          }
          .lock-form button[type="submit"] {
            width: 100%;
            padding: 0.95rem;
            border-radius: 12px;
            background: #e63946;
            color: #ffffff;
            font-size: 1rem;
            font-weight: 700;
            border: none;
            cursor: pointer;
            transition: background-color 0.2s, transform 0.1s;
            box-shadow: 0 4px 15px rgba(230, 57, 70, 0.3);
          }
          .lock-form button[type="submit"]:hover {
            background: #d62e3b;
          }
          .lock-form button[type="submit"]:active {
            transform: scale(0.99);
          }
          .login-err {
            color: #f87171;
            font-size: 0.85rem;
            margin-top: 1.25rem;
            padding: 0.6rem;
            background: rgba(239, 68, 68, 0.1);
            border-radius: 8px;
            border: 1px solid rgba(239, 68, 68, 0.2);
          }
        ` }} />
        <div className="lock-card">
          <img src="/itl_monogram_logo.png" alt="IT Legends Logo" style={{ width: '64px', height: '64px', marginBottom: '1.25rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }} />
          <h1>Authorized Entry</h1>
          <p>Please provide the supervisor passcode to configure IT Legends content directories.</p>
          <form onSubmit={handleLogin} className="lock-form">
            <div className="input-container">
              <input
                type={showPasscodeText ? 'text' : 'password'}
                placeholder="Enter passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPasscodeText(!showPasscodeText)}
                className="toggle-pwd-btn"
                aria-label="Toggle password visibility"
              >
                {showPasscodeText ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            <button type="submit">Unlock Dashboard</button>
          </form>
          {loginError && <div className="login-err">{loginError}</div>}
        </div>
      </div>
    );
  }

  // DASHBOARD WORKSPACE RENDER
  return (
    <div className="admin-dashboard">
      <style dangerouslySetInnerHTML={{ __html: `
        .admin-dashboard {
          min-height: 100vh;
          background: #08090d;
          color: #f1f5f9;
          font-family: 'Outfit', sans-serif;
          display: flex;
          flex-direction: column;
        }
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: #0d0e15;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        .admin-brand {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .admin-brand img {
          width: 32px;
          height: 32px;
          border-radius: 6px;
        }
        .admin-brand h1 {
          font-size: 1.1rem;
          font-weight: 800;
          margin: 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: linear-gradient(to right, #ffffff, #a1a1aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .logout-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #94a3b8;
          padding: 0.45rem 1rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .logout-btn:hover {
          color: #ffffff;
          border-color: #e63946;
          background: rgba(230, 57, 70, 0.05);
        }
        .admin-main {
          display: flex;
          flex: 1;
          height: calc(100vh - 65px);
          overflow: hidden;
        }
        .admin-sidebar {
          width: 340px;
          background: #0b0c12;
          border-right: 1px solid rgba(255, 255, 255, 0.04);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }
        .collection-tabs {
          display: flex;
          flex-direction: column;
          padding: 0.85rem;
          gap: 0.35rem;
          background: rgba(0, 0, 0, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }
        .tab-btn {
          padding: 0.65rem 0.85rem;
          border: none;
          background: transparent;
          color: #94a3b8;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          text-align: left;
          border-radius: 8px;
          transition: all 0.2s;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .tab-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.02);
        }
        .tab-btn.active {
          color: #ffffff;
          background: rgba(230, 57, 70, 0.09);
        }
        .tab-btn .tab-count {
          font-size: 0.72rem;
          background: rgba(255, 255, 255, 0.06);
          padding: 0.15rem 0.45rem;
          border-radius: 6px;
          color: #64748b;
        }
        .tab-btn.active .tab-count {
          background: #e63946;
          color: #ffffff;
        }
        .sidebar-search-row {
          padding: 0.85rem;
          display: flex;
          gap: 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }
        .sidebar-search-row input {
          flex: 1;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 0.55rem 0.85rem;
          font-size: 0.85rem;
          color: #ffffff;
          outline: none;
        }
        .sidebar-search-row input:focus {
          border-color: rgba(255, 255, 255, 0.2);
        }
        .new-btn {
          background: #e63946;
          border: none;
          color: #ffffff;
          padding: 0.55rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          box-shadow: 0 4px 10px rgba(230, 57, 70, 0.2);
        }
        .new-btn:hover {
          background: #d62e3b;
        }
        .items-list {
          flex: 1;
          overflow-y: auto;
          padding: 0.65rem;
        }
        .list-item-btn {
          width: 100%;
          text-align: left;
          padding: 0.75rem 0.85rem;
          border: none;
          background: transparent;
          border-radius: 8px;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          box-sizing: border-box;
          margin-bottom: 0.3rem;
          border: 1px solid transparent;
        }
        .list-item-btn:hover {
          background: rgba(255, 255, 255, 0.02);
          color: #f1f5f9;
        }
        .list-item-btn.active {
          background: rgba(255, 255, 255, 0.04);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.05);
        }
        .list-item-title {
          font-size: 0.88rem;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .list-item-slug {
          font-size: 0.72rem;
          color: #64748b;
          font-family: monospace;
        }
        .admin-workspace {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #07080c;
        }
        .workspace-tabs {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1.5rem;
          background: #0b0c11;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        .mode-toggle-group {
          display: flex;
          background: rgba(0, 0, 0, 0.25);
          padding: 0.25rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }
        .mode-btn {
          padding: 0.4rem 1rem;
          background: transparent;
          border: none;
          border-radius: 6px;
          color: #94a3b8;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .mode-btn.active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
        }
        .workspace-form-wrapper {
          flex: 1;
          overflow-y: auto;
          padding: 2rem;
          box-sizing: border-box;
        }
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-bottom: 1.25rem;
        }
        .form-group label {
          font-size: 0.78rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .form-group input,
        .form-group textarea {
          background: #0e0f17;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          padding: 0.75rem 0.95rem;
          color: #ffffff;
          font-size: 0.9rem;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #e63946;
          box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.1);
        }
        .form-group textarea {
          font-family: monospace;
          resize: vertical;
          min-height: 120px;
          line-height: 1.5;
        }
        .body-editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
        }
        .editor-toolbar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .toolbar-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #94a3b8;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s;
        }
        .toolbar-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
        }
        .body-textarea {
          min-height: 420px !important;
        }
        .workspace-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.85rem;
          padding: 1.25rem 2rem;
          background: #0b0c11;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }
        .btn-action {
          padding: 0.65rem 1.8rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
        }
        .btn-save {
          background: #e63946;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(230, 57, 70, 0.25);
        }
        .btn-save:hover {
          background: #d62e3b;
        }
        .btn-delete {
          background: transparent;
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #ef4444;
        }
        .btn-delete:hover {
          background: rgba(239, 68, 68, 0.08);
          border-color: #ef4444;
        }
        .status-alert {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .status-success {
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.2);
          color: #4ade80;
        }
        .status-error {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #f87171;
        }
        .preview-pane {
          flex: 1;
          background: #040508;
          padding: 1.5rem;
          box-sizing: border-box;
        }
        .preview-pane iframe {
          width: 100%;
          height: 100%;
          border: none;
          background: #090a0f;
          border-radius: 12px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
        }
      ` }} />

      <header className="admin-header">
        <div className="admin-brand">
          <img src="/itl_monogram_logo.png" alt="IT Legends Logo" />
          <h1>Workspace Dashboard</h1>
        </div>
        <button onClick={handleLogout} className="logout-btn">Log Out</button>
      </header>

      <div className="admin-main">
        {/* SIDEBAR */}
        <aside className="admin-sidebar">
          <div className="collection-tabs">
            {COLLECTIONS.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCollection(c.id);
                  setSearchQuery('');
                }}
                className={`tab-btn ${selectedCollection === c.id ? 'active' : ''}`}
              >
                <span>{c.name}</span>
                <span className="tab-count">{counts[c.id] || 0}</span>
              </button>
            ))}
          </div>

          <div className="sidebar-search-row">
            <input
              type="text"
              placeholder="Search by title or slug..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleNewItem} className="new-btn" title="Create a new item in this collection">+ New</button>
          </div>

          <div className="items-list">
            {loadingItems ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>Loading items...</div>
            ) : filteredKeys.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>No items found.</div>
            ) : (
              filteredKeys.map((slug) => (
                <button
                  key={slug}
                  onClick={() => selectItem(slug, items[slug])}
                  className={`list-item-btn ${activeSlug === slug ? 'active' : ''}`}
                >
                  <span className="list-item-title">{items[slug].title || slug}</span>
                  <span className="list-item-slug">/{selectedCollection === 'blog' ? 'blog' : selectedCollection}/{slug}</span>
                </button>
              ))
            )}
          </div>
        </aside>

        {/* WORKSPACE */}
        <main className="admin-workspace">
          <div className="workspace-tabs">
            <div className="mode-toggle-group">
              <button
                onClick={() => setEditMode('editor')}
                className={`mode-btn ${editMode === 'editor' ? 'active' : ''}`}
              >
                Code Editor
              </button>
              <button
                onClick={() => setEditMode('preview')}
                className={`mode-btn ${editMode === 'preview' ? 'active' : ''}`}
              >
                Live Preview Frame
              </button>
            </div>

            {statusMsg.text && (
              <div className={`status-alert status-${statusMsg.type}`}>
                {statusMsg.type === 'success' ? '✓ ' : '✗ '} {statusMsg.text}
              </div>
            )}
          </div>

          {editMode === 'editor' ? (
            <form onSubmit={handleSave} className="workspace-form-wrapper">
              <div className="form-grid-2">
                <div className="form-group">
                  <label>Page Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleFieldChange('title', e.target.value)}
                    placeholder="Page Title (e.g. Healthcare IT Support)"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>URL Path (Slug)</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => handleFieldChange('slug', e.target.value)}
                    placeholder="url-path-slug"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>SEO Meta Description</label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) => handleFieldChange('description', e.target.value)}
                  placeholder="Summarize page content in 150-160 characters for Google SERPs..."
                />
              </div>

              <div className="form-group">
                <div className="body-editor-header">
                  <label>HTML Content Body</label>
                  <div className="editor-toolbar">
                    <button
                      type="button"
                      className="toolbar-btn"
                      onClick={() => insertSnippet('<section class="section">\n  <div class="container">\n    <h2>Section Title</h2>\n    <p>Content goes here...</p>\n  </div>\n</section>\n')}
                      title="Insert section container wrapper"
                    >
                      + Section
                    </button>
                    <button
                      type="button"
                      className="toolbar-btn"
                      onClick={() => insertSnippet('<h2>Subheading</h2>\n')}
                      title="Insert H2 Heading"
                    >
                      H2
                    </button>
                    <button
                      type="button"
                      className="toolbar-btn"
                      onClick={() => insertSnippet('<p>Paragraph text...</p>\n')}
                      title="Insert Paragraph Tag"
                    >
                      P
                    </button>
                    <button
                      type="button"
                      className="toolbar-btn"
                      onClick={() => insertSnippet('<div class="grid grid-3">\n  <div class="card">\n    <h3>Card 1</h3>\n    <p>Content...</p>\n  </div>\n  <div class="card">\n    <h3>Card 2</h3>\n    <p>Content...</p>\n  </div>\n  <div class="card">\n    <h3>Card 3</h3>\n    <p>Content...</p>\n  </div>\n</div>\n')}
                      title="Insert 3-Card Grid"
                    >
                      + Card Grid
                    </button>
                    <button
                      type="button"
                      className="toolbar-btn"
                      onClick={() => insertSnippet('<a class="btn btn-primary" href="/consultation-form">Book Free Assessment</a>\n')}
                      title="Insert Red CTA Button Link"
                    >
                      + Button
                    </button>
                    <button
                      type="button"
                      className="toolbar-btn"
                      onClick={() => insertSnippet('<ul class="bullets">\n  <li>Bullet point item 1</li>\n  <li>Bullet point item 2</li>\n</ul>\n')}
                      title="Insert bullet list container"
                    >
                      + Bullets List
                    </button>
                  </div>
                </div>
                <textarea
                  ref={textareaRef}
                  className="body-textarea"
                  value={formData.body}
                  onChange={(e) => handleFieldChange('body', e.target.value)}
                  placeholder="<main id='main-content'>...</main>"
                  required
                />
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>JSON-LD SEO Schema (JSON Array)</label>
                  <textarea
                    value={formData.jsonLds}
                    onChange={(e) => handleFieldChange('jsonLds', e.target.value)}
                    placeholder="[ { ... } ]"
                  />
                </div>
                <div className="form-group">
                  <label>Scoped Scoped Styles (JSON CSS Array)</label>
                  <textarea
                    value={formData.styles}
                    onChange={(e) => handleFieldChange('styles', e.target.value)}
                    placeholder="[ 'h2 { color: red; }' ]"
                  />
                </div>
              </div>
            </form>
          ) : (
            <div className="preview-pane">
              <iframe
                srcDoc={`
                  <!DOCTYPE html>
                  <html>
                    <head>
                      <meta charset="utf-8">
                      <link rel="stylesheet" href="/styles.css">
                      <style>
                        body { background: #08090d; color: #cbd5e1; padding: 2.5rem; font-family: sans-serif; }
                      </style>
                      ${(() => {
                        try {
                          const parsed = JSON.parse(formData.styles);
                          return parsed.map(s => `<style>${s}</style>`).join('\n');
                        } catch(e) { return ''; }
                      })()}
                    </head>
                    <body>
                      ${formData.body}
                    </body>
                  </html>
                `}
                title="Workspace Preview"
              />
            </div>
          )}

          <div className="workspace-actions">
            <button
              onClick={handleDelete}
              type="button"
              className="btn-action btn-delete"
              disabled={submitting}
            >
              Delete Page
            </button>
            <button
              onClick={handleSave}
              type="submit"
              className="btn-action btn-save"
              disabled={submitting}
            >
              {submitting ? 'Saving changes...' : 'Save Changes'}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
