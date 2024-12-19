import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive';
  size?: 'default' | 'sm';
  children: React.ReactNode;
  className?: string;
}

export function Button({ 
  variant = 'default', 
  size = 'default',
  className = "",
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = "font-medium rounded-lg transition-colors";
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    destructive: "bg-red-500 text-white hover:bg-red-600"
  };
  const sizeStyles = {
    default: "px-4 py-2",
    sm: "px-3 py-1 text-sm"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
