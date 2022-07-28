'use strict';

import './table.css';
import data from './tableJson.json';

console.log(data);

const Table = () => {
  const Tags = (html) => {
    let tempDivElement = document.createElement('div');
    tempDivElement.innerHTML = html;
    return tempDivElement.textContent || tempDivElement.innerText || '';
  };

  return (
    <div>
      <table
        border="1"
        style={{
          borderCollapse: 'collapse',
          minWidth: '80vw',
          minHeight: '20vh',
        }}
      >
        {data.fields?.static.map((elem) => (
          <tr>
            {elem?.columns.map((item) => (
              <th
                disabled
                rowSpan={item?.rowspan || 1}
                colSpan={item.colspan || 1}
              >
                {Tags(item?.data)}
              </th>
            ))}
          </tr>
        ))}
        {data.fields?.dynamic.map((elem) => (
          <tr>
            {elem?.columns.map((item) => (
              <td rowSpan={item?.rowspan || 1} colSpan={item.colspan || 1}>
                {item?.data && Tags(item?.data)}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
