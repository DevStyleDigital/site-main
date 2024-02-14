'use client';
import { Image } from 'lucide-react';
import { useRef } from 'react';
import { cn } from '@/utils/cn';

export const DropzoneInput = ({
  id,
  accept = 'image/*',
  disabled,
  handleFiles,
}: {
  id: any;
  accept?: string;
  disabled?: boolean;
  handleFiles: (file: File[]) => void;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleFilesSelected(files: FileList | File[] | null) {
    if (!files || !files.length) return;
    handleFiles([...(files as any)]);
    if (inputRef.current) inputRef.current.value = '';
  }

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className={cn(
          'relative border flex rounded-md h-28 cursor-pointer border-dashed text-sm gap-2 justify-center items-center text-muted-foreground hover:bg-primary/5',
        )}
        onDrop={(ev) => {
          ev.preventDefault();
          const onlyImages = [...(ev.dataTransfer.files as any)].filter((file) =>
            file.type.includes(
              accept !== 'image/*' ? accept.replaceAll('.', '') : 'image',
            ),
          );

          handleFilesSelected(onlyImages);
        }}
        onDragOver={(ev) => ev.preventDefault()}
      >
        Araste ou clique para selecionar suas imagens.
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image className="w-4 h-4" aria-hidden />
      </label>
      <input
        type="file"
        id={id}
        accept={accept}
        className="sr-only"
        multiple
        disabled={disabled}
        ref={inputRef}
        onChange={(ev) => handleFilesSelected(ev.currentTarget.files)}
      />
    </div>
  );
};
