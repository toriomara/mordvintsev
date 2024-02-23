'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Заголовок должен содержать не менее 2 символов',
  }),
  description: z.string().min(10, {
    message: 'Описание должен содержать не менее 10 символов',
  }),
  author: z.string().min(2, {
    message: 'Поле автор должно содержать не менее 10 символов',
  }),
  category: z.string(), // Validation select a few SelectItem
  image: z.string().url().optional(),
  text: z.string().min(2, {
    message: 'Текст должен содержать не менее 100 символов',
  }),
});

export function AddPost() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      author: '',
      category: '',
      image: '',
      text: '',
    },
  });

  const handleSubmit = async (post) => {
    try {
      setOpen(false);
      const res = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      router.refresh();
      return data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='mb-6'>Добавить</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Добавить пост</DialogTitle>
          <DialogDescription>
            Поля, помеченные * обязательны для заполнения
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className='flex flex-col gap-4 w-full max-w-md space-y-2'
          >
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Заголовок *</FormLabel>
                  <FormControl>
                    <Input placeholder='Название поста' {...field} />
                  </FormControl>
                  <FormDescription>Добавьте заголовок</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание *</FormLabel>
                  <FormControl>
                    <Input placeholder='Описание поста' {...field} />
                  </FormControl>
                  <FormDescription>Краткое содержание поста</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='author'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Автор *</FormLabel>
                  <FormControl>
                    <Input placeholder='Автор поста' {...field} />
                  </FormControl>
                  <FormDescription>Добавьте своё имя</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='category'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Категория *</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Выберите категорию' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='административное право'>
                        Административное право
                      </SelectItem>
                      <SelectItem value='уголовные дела'>
                        Уголовные дела
                      </SelectItem>
                      <SelectItem value='семейный адвокат'>
                        Семейный адвокат
                      </SelectItem>
                    </SelectContent>
                    <FormDescription>Выберите категорию</FormDescription>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='image'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Изображение</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Добавьте изображение'
                      // type='file'
                      type='text'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Добавьте ссылку на изображение
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='text'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Текст *</FormLabel>
                  <FormControl>
                    <Textarea placeholder='Текст поста' {...field} />
                  </FormControl>
                  <FormDescription>Добавьте текст поста</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Добавить</Button>
          </form>
        </Form>
        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Закрыть
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
