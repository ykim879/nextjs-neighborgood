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

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const neighborhoodId = searchParams.get('neighborhoodId');

        if (!neighborhoodId) {
            return NextResponse.json({ message: "neighborhoodId query parameter is required" }, { status: 400 });
        }

        const goods = await Good.find({ neighborhoodId });

        if (goods.length === 0) {
            return NextResponse.json({ message: "No goods found for the given neighborhoodId" }, { status: 404 });
        }

        return NextResponse.json(goods, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
