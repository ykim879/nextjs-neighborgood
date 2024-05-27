import connectDB from '@/src/libs/mongodb';
import Good from '@/src/models/good';
import { NextResponse, NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';


export async function POST(req: NextRequest) {
    try {
    const { name, img, description, cost, available_count, effective_from, effective_to, neighborhoodId, type, zipCode } = await req.json();
    const id = uuidv4();
    await connectDB();
    await Good.create({
        id,
        name,
        img,
        description,
        cost,
        available_count,
        effective_from,
        effective_to,
        neighborhoodId,
        type,
        zipCode
    });

    return NextResponse.json({ message: "Good Created" }, { status: 201 });
}  catch (error) {
    return  NextResponse.json({ message: error }, { status: 400 });
  }
};
