import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const VALID_PASSCODE = 'itlegends2026';
const VALID_COLLECTIONS = ['blog', 'locations', 'industries', 'services'];

function getFilePath(collection) {
  return path.join(process.cwd(), 'src', 'data', `${collection}.json`);
}

function checkAuth(request) {
  const passcode = request.headers.get('x-admin-passcode');
  return passcode === VALID_PASSCODE;
}

// GET - read collection content
export async function GET(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const collection = searchParams.get('collection');

  if (!collection || !VALID_COLLECTIONS.includes(collection)) {
    return NextResponse.json({ error: 'Invalid collection' }, { status: 400 });
  }

  try {
    const filePath = getFilePath(collection);
    const rawData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(rawData);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: `Failed to read database: ${error.message}` }, { status: 500 });
  }
}

// POST - add or update item inside collection
export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { collection, slug, data } = await request.json();

    if (!collection || !VALID_COLLECTIONS.includes(collection)) {
      return NextResponse.json({ error: 'Invalid collection' }, { status: 400 });
    }

    if (!slug || typeof slug !== 'string') {
      return NextResponse.json({ error: 'Invalid slug' }, { status: 400 });
    }

    const filePath = getFilePath(collection);
    const rawData = await fs.readFile(filePath, 'utf-8');
    const db = JSON.parse(rawData);

    // Update or insert item
    db[slug] = {
      title: data.title || '',
      description: data.description || '',
      styles: data.styles || [],
      jsonLds: data.jsonLds || [],
      body: data.body || '',
    };

    // Write back to file formatted cleanly
    await fs.writeFile(filePath, JSON.stringify(db, null, 2), 'utf-8');

    return NextResponse.json({ success: true, slug });
  } catch (error) {
    return NextResponse.json({ error: `Failed to save changes: ${error.message}` }, { status: 500 });
  }
}

// DELETE - delete item from collection
export async function DELETE(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { collection, slug } = await request.json();

    if (!collection || !VALID_COLLECTIONS.includes(collection)) {
      return NextResponse.json({ error: 'Invalid collection' }, { status: 400 });
    }

    if (!slug) {
      return NextResponse.json({ error: 'Invalid slug' }, { status: 400 });
    }

    const filePath = getFilePath(collection);
    const rawData = await fs.readFile(filePath, 'utf-8');
    const db = JSON.parse(rawData);

    if (!db[slug]) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    // Delete item
    delete db[slug];

    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(db, null, 2), 'utf-8');

    return NextResponse.json({ success: true, slug });
  } catch (error) {
    return NextResponse.json({ error: `Failed to delete item: ${error.message}` }, { status: 500 });
  }
}
