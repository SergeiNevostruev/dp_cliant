export default function download(
  content: any,
  fileName: string,
  contentType: string = 'text/plain',
) {
  const a = document.createElement('a');
  const file = new Blob([content], {
    type: contentType,
  });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
