// url: http://localhost:3010/api/posts/post1

import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      return NextResponse.json(
        { message: "Пост не найден", error },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка загрузки поста", error },
      { status: 500 }
    );
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const { id } = params;
    const body = await request.json();
    const { title, description, image, text, author, category } = body;

    const updatePost = await prisma.post.update({
      where: { id },
      data: {
        title,
        description,
        image,
        text,
        author,
        category,
      },
    });

    if (!updatePost) {
      return NextResponse.json(
        { message: "Пост не обновлён", error },
        { status: 404 }
      );
    }

    return NextResponse.json(updatePost);
  } catch (error) {
    return NextResponse.json(
      { message: "Произошла ошибка при обновлении поста", error },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;
    await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json("Пост удалён");
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка удаления поста", error },
      { status: 500 }
    );
  }
};
