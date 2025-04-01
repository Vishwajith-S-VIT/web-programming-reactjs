import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

const files = [
  { folder: 'Ex-13', files: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12'] },
  { folder: 'Ex-14', files: ['Q1', 'Q2', 'Q3'] },
  { folder: 'Ex-15', files: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12'] },
];

const loadComponent = (folder, file) => {
  return lazy(() => import(`./${folder}/${file}`));
};

function DynamicTable(){
  return (
    <div>
      <h1 align='center'>My React Exercises </h1>
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
    <Router>
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
