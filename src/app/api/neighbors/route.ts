import connectDB from '@/src/libs/mongodb';
import Neighbor from '@/src/models/neighbor';
import { NextResponse, NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// POST API to create a new neighbor
export async function POST(req: NextRequest) {
  try {
    const { name, img, headline, description, zipcode, position } = await req.json();
    const id = uuidv4();
    await connectDB();
    const newNeighbor = await Neighbor.create({
      id,
      name,
      img,
      headline,
      description,
      zipcode,
      position,
    });

    return NextResponse.json({ message: "Neighbor Created", neighbor: newNeighbor }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

// GET API to fetch neighbors by zipcode
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const zipcode = searchParams.get('zipcode');

    if (!zipcode) {
      return NextResponse.json({ message: "Zipcode query parameter is required" }, { status: 400 });
    }

    const neighbors = await Neighbor.find({ zipcode: parseInt(zipcode, 10) });

    return NextResponse.json(neighbors, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
