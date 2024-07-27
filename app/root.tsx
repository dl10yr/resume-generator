import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { createContext, useState } from "react";

type SourceFilesData = {
  yaml: File | undefined;
  faceImage: File | undefined;
};

type SourceFilesContextData = {
  sourceFilesData: SourceFilesData;
  setSourceFilesData: (newData: SourceFilesData) => void;
};

interface SourceFilesProviderProps {
  children: React.ReactNode;
}

export const sourceFilesContext = createContext<SourceFilesContextData>({
  sourceFilesData: {
    yaml: undefined,
    faceImage: undefined,
  },
  setSourceFilesData: () => {},
});

const SourceFilesProvider = (props: SourceFilesProviderProps) => {
  const [sourceFilesData, setSourceFilesData] = useState<SourceFilesData>({
    yaml: undefined,
    faceImage: undefined,
  });

  return (
    <sourceFilesContext.Provider
      value={{ sourceFilesData, setSourceFilesData }}
    >
      {props.children}
    </sourceFilesContext.Provider>
  );
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SourceFilesProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </SourceFilesProvider>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
