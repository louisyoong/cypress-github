import React from "react";

type TableColumn<T> = {
  header: string;
  accessor: keyof T;
};

type TableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
  onRowClick?: (item: T) => void;
};

const Table = <T extends {}>({ data, columns, onRowClick }: TableProps<T>) => {
  return (
    <table className="w-full rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-blue-600 text-white text-left text-sm">
          {columns.map((column) => (
            <th key={column.accessor as any} className="py-2 px-4 border">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="text-center py-10">
              No matching data found.
            </td>
          </tr>
        ) : (
          data.map((item) => (
            <tr
              key={(item as any).id}
              className="hover:bg-gray-100 text-sm cursor-pointer"
              onClick={() => onRowClick?.(item)}
            >
              {columns.map((column) => (
                <td key={column.accessor as any} className="py-2 px-4 border">
                  {(item as any)[column.accessor]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
