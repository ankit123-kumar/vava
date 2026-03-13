import React from "react";
import Skeleton from "../Skeleton";

function StudentsTableSkeleton({ theme }) {

  return (
    <div className={`${theme.card} ${theme.border} border rounded-xl p-5`}>

      <table className="w-full">

        <tbody>

          {[...Array(6)].map((_, i) => (

            <tr key={i} className="border-b">

              <td className="py-3">
                <Skeleton className={`h-4 w-28 ${theme.skeleton}`} />
              </td>

              <td>
                <Skeleton className={`h-4 w-40 ${theme.skeleton}`} />
              </td>

              <td>
                <Skeleton className={`h-4 w-16 ${theme.skeleton}`} />
              </td>

              <td>
                <Skeleton className={`h-4 w-16 ${theme.skeleton}`} />
              </td>

              <td>
                <Skeleton className={`h-4 w-16 ${theme.skeleton}`} />
              </td>

              <td>
                <Skeleton className={`h-4 w-20 ${theme.skeleton}`} />
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default StudentsTableSkeleton;