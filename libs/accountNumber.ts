import { prisma } from "./prisma";

export async function generateAccountNumber(): Promise<string> {
  while (true) {
    // Generate a random 10-digit number
    const accountNumber = Math.floor(
      1000000000 + Math.random() * 9000000000,
    ).toString();

    const existing = await prisma.user.findUnique({
      where: {
        accountNumber,
      },
    });

    if (!existing) {
      return accountNumber;
    }
  }
}
