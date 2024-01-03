import React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  message: string;
  stack: string;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, message: "", stack: "" };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error.message, stack: error.stack };
  }

  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
  //   // console.log({ error, errorInfo });
  // }

  render() {
    if (this.state.hasError)
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <p style={{ textAlign: "center", fontSize: "28px" }}>
            ❌ 💣 💥 🛠 🚑 🚒 🚓 🛴
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span
              style={{ display: "flex", alignItems: "center", fontWeight: 600 }}
            >
              Message 👇🏻
            </span>
            &nbsp;
            <span style={{ color: "green" }}>{this.state.message}</span>
          </p>

          <p
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span
              style={{ display: "flex", alignItems: "center", fontWeight: 600 }}
            >
              Stack 👇🏻
            </span>
            &nbsp;
            <span style={{ backgroundColor: "rgba(0,0,0,0.7)", color: "#fff" }}>
              {this.state.stack}
            </span>
          </p>
        </div>
      );
    return this.props.children;
  }
}

export default ErrorBoundary;
