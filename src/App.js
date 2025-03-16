import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const files = [
  { folder: 'Ex-1', files: ['Q1'] },
];

const loadComponent = (folder, file) => {
  return lazy(() => import(`./${folder}/${file}`));
};

function DynamicTable() {
  return (
    <div>
      <h1 align='center'>My React Exercises</h1>
      <table border="2" cellSpacing={0} cellPadding={5} align='center'>
        <thead>
          <tr>
            <th>Exercise Name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {files.map((folderObj) =>
            folderObj.files.map((file) => (
              <tr key={`${folderObj.folder}/${file}`}>
                <td>{folderObj.folder}/{file}</td>
                <td><Link to={`/${folderObj.folder}/${file}`}>Open</Link></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <Router basename="/web-programming-reactjs"> {/* 👈 FIXED HERE */}
      <Routes>
        <Route path="/" element={<DynamicTable />} />
        {files.map((folderObj) =>
          folderObj.files.map((file) => {
            const Component = loadComponent(folderObj.folder, file);
            return (
              <Route
                key={`${folderObj.folder}/${file}`}
                path={`/${folderObj.folder}/${file}`}
                element={
                  <Suspense fallback={<h2>Loading...</h2>}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })
        )}
      </Routes>
    </Router>
  );
}

export default App;
