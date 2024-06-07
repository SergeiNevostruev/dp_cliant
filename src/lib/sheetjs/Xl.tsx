import { useEffect, useRef } from 'react';
import Spreadsheet from 'x-data-spreadsheet';
import options from './options';

export function Xl() {
  const dataFetch = useRef(false);

  useEffect(() => {
    if (dataFetch.current) return;
    dataFetch.current = true;
    const s = new Spreadsheet('#x-spreadsheet-demo', options);
    s.change((json) => {
      console.log(json);
    });
    console.log('загрузка');
  }, []);

  return (
    <>
      <div
        id={'x-spreadsheet-demo'}
        style={{ width: '100%', height: '100%' }}
      />
    </>
  );
}
