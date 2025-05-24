import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server"; 

export async function POST(req: Request) {
  try {
    const { clerkId } = await req.json();

    if (!clerkId) {
      return NextResponse.json({ success: false, error: "Missing clerkId" }, { status: 400 });
    }

    const client = await clerkClient()
    await client.users.deleteUser(clerkId)

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete Clerk user:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
