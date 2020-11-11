import React, { CSSProperties } from 'react';
import { Table } from 'reactstrap';

export type Column = {
  name: string;
  title: string;
  style?: CSSProperties;
} | string;

export interface Row {
  id: string;
    [x: string]: string
}

export interface CrudTableProps {
  active: Row | null;
  onChange?: (row: any) => void
  columns?: Column[]
  data?: Array<Row>
}

const styles: { [x: string]: CSSProperties } = {
  cellNum: {
    width: 30
  }
}

const CrudTable: React.FC<CrudTableProps> = (props) => {
  const { active } = props;
  const onRowClick = (row: any) => () => {
    if (!props.onChange) return;
    if (row === active)
      props.onChange(null);
    else
      props.onChange(row);
  }
  return (
    <Table>
      <thead>
        <tr>
          <th style={styles.cellNum}>
            #
          </th>
          {props.columns?.map((column, idx) => {
            if (typeof column === 'string')
              return <th key={idx}>{column}</th>
            return (
              <th key={idx} style={column.style}>
                {column.title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.data?.map((row) => {
          return (
            <tr onClick={onRowClick(row)} style={{ cursor: 'pointer' }}>
              <td>
                <input checked={active?.id === row.id} type='checkbox' />
              </td>
              {Object.keys(row).map((column, idx) => {
                return (
                  <td key={idx}>
                    {row[column]}
                  </td>
                );
              })}
            </tr>
          )
          
        })}
      </tbody>
    </Table>
  );
}

CrudTable.defaultProps = {
  columns: [],
  data: [],
  onChange: () => { },
  active: null
}

export default CrudTable;
