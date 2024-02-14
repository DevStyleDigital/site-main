/* eslint-disable react/function-component-definition */
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DropzoneInput } from './dropzone-input';
import Image from 'next/image';
import { Trash } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import React from 'react';

export type DropzoneFields = { file: File | string; id: string; label: string };
type CardImageDropzoneProps<T> = {
  id?: string;
  accept?: string;
  fileSizeType?: 'Mb' | 'Kb';
  info?: string;
  renderForm?: (image: T) => React.ReactNode;
  handleImages?: any;
  images: T[] | undefined;
} & BTypes.FCChildren;

export function CardImageDropzone<T>({
  images,
  handleImages,
  id,
  info,
  fileSizeType = 'Mb',
  accept,
  children,
  renderForm,
}: CardImageDropzoneProps<T>) {
  function handleDeleteImage(i: number, arr: any[]) {
    const newArr = [...arr];
    newArr.splice(i, 1);
    return newArr;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{children}</CardTitle>
        <CardDescription>
          clique ou arraste os arquivos para seleciona-los.
        </CardDescription>
        {!images?.length && (
          <DropzoneInput
            id={id}
            accept={accept}
            handleFiles={(files) => {
              const filesPrepare: DropzoneFields[] = [];

              for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file.size < 31000000) {
                  filesPrepare.push({
                    file,
                    id: uuid(),
                    label: '',
                  });
                } else
                  toast.warn(
                    `O arquivo: ${file.name} é muito pesado, passa do limite de 30Mb, por favor selecione outro.`,
                  );
              }

              handleImages((prev: any) => {
                if (!prev) return filesPrepare as T[];
                const newFiles = filesPrepare.filter((file) => {
                  let duplicate = false;
                  for (let i = 0; i < prev.length; i++) {
                    const thisFile = (prev[i] as DropzoneFields).file;
                    if (
                      typeof file.file !== 'string' &&
                      typeof thisFile !== 'string' &&
                      file.file.name === thisFile.name
                    ) {
                      duplicate = true;
                      break;
                    }
                  }

                  return !duplicate;
                });

                return [...newFiles, ...prev] as T[];
              });
            }}
          />
        )}
        <p className="text-sm italic font-normal opacity-60">{info}</p>
      </CardHeader>
      <CardContent className="space-y-4 flex flex-col">
        <Separator />
        {images && (
          <ul className="space-y-8">
            {images.map((image, i) => (
              <li key={(image as DropzoneFields).id} className="flex space-y-2 flex-col">
                <div className="flex space-x-4">
                  <div className="overflow-hidden flex-shrink-0 w-[80px] aspect-square rounded-md">
                    <Image
                      src={
                        typeof (image as DropzoneFields).file === 'string'
                          ? `${(image as DropzoneFields).file as string}?${Date.now()}`
                          : URL.createObjectURL((image as DropzoneFields).file as File)
                      }
                      alt=""
                      width={2000}
                      height={2000}
                      className={
                        'h-full w-full object-cover transition-all hover:scale-105'
                      }
                    />
                  </div>
                  <div className="w-full">
                    <p className="truncate font-medium max-w-xs">
                      {typeof (image as DropzoneFields).file === 'string'
                        ? ((image as DropzoneFields).file as string)
                        : ((image as DropzoneFields).file as File).name}
                    </p>
                    <p className="text-muted-foreground text-sm opacity-60">
                      {typeof (image as DropzoneFields).file === 'string'
                        ? 'less than 25Mb'
                        : fileSizeType === 'Mb'
                          ? `${(
                              ((image as DropzoneFields).file as File).size / 1000000
                            ).toFixed(2)}Mb`
                          : `${(
                              ((image as DropzoneFields).file as File).size / 1000
                            ).toFixed(2)}Kb`}
                    </p>
                  </div>
                  <div className="self-center">
                    <button
                      type="button"
                      className="text-red-500 hover:bg-red-500/10 rounded-md p-3"
                      onClick={() =>
                        handleImages((prev: any) => handleDeleteImage(i, prev!))
                      }
                    >
                      <span className="sr-only">Deletar (image as DropzoneFields)m</span>
                      <Trash />
                    </button>
                  </div>
                </div>
                {/* <div className="flex flex-col">
                  <div className="flex-1 flex flex-col">
                    <Label className="sr-only" htmlFor={(image as DropzoneFields).id}>
                      Descrição
                    </Label>
                    <Input
                      id={(image as DropzoneFields).id}
                      placeholder="Descrição da imagem"
                      name="alt"
                      defaultValue={(image as DropzoneFields).label}
                      required
                      onChange={({ target: { value } }) => {
                        (image as DropzoneFields).label = value;
                      }}
                      // disabled={loading || isLoading}
                    />
                  </div>
                  {renderForm && renderForm(image)}
                </div> */}
              </li>
            ))}
          </ul>
        )}
        {!images?.length && (
          <span className="text-muted-foreground text-sm opacity-60 text-center italic">
            Nenhum arquivo selecionado.
          </span>
        )}
      </CardContent>
    </Card>
  );
}
