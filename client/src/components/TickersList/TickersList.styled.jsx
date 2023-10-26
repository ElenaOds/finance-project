import styled from 'styled-components';

export const Table = styled.table`
// width: 520px;
text-align: center;
border-radius: 2px;
box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.12), 
1px 3px 4px rgba(0, 0, 0, 0.14), 
0px 1px 2px rgba(0, 0, 0, 0.2);

    // & tbody tr:nth-of-type(even) {
    // background-color: #cddeee;
    // }
    & tbody td {
    border: 0.5px solid #bdbfc2;
  }
  }
`;

export const Head = styled.thead`
  background-color: #0096FF;

  height: 42px;
 `;

 export const HeadTitle = styled.th`
   font-weight: 500;
   font-size: 16px;
   color: #ffff;
 `;

export const Row = styled.tr`
 height: 42px;
 color: #808080;
 font-size: 16px;
 }
 `

 export const Cell = styled.td`
 height: 42px;
 width: 150px;
 color: #000;
 font-size: 16px;
 
  }
 }
 `