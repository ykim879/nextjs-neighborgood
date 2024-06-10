import connectDB from '@/src/libs/mongodb';
import Neighbor from '@/src/models/neighbor';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: "Neighbor ID query parameter is required" }, { status: 400 });
    }

    const neighbor = await Neighbor.findOne({ id });

    if (!neighbor) {
      return NextResponse.json({ message: "Neighbor not found for id=" + id}, { status: 404 });
    }

    return NextResponse.json(neighbor, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
