import React from 'react';

export function LinktreeIcon({ pathClassName }: { pathClassName: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="-5 -5 30 36"
    >
      <path
        className={pathClassName}
        d="M11.51 5.853l4.006-4.117 2.324 2.381-4.2 4.005h5.909v3.305H13.61l4.23 4.107-2.325 2.334L9.774 12.1l-5.741 5.77-2.325-2.325 4.23-4.108H0V8.122h5.91L1.707 4.117l2.325-2.38 4.005 4.116V0h3.473v5.853zM8.039 16.16h3.473v7.842H8.038V16.16z"
      ></path>
    </svg>
  );
}
