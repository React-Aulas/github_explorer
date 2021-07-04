import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, Card } from './styles';
import ArrowSvg from '../../assets/Vector.svg';

export const Home = () => {
  const [projects, setProjects] = useState([]);

  const userName = '1nickael1';

  useEffect(() => {
    getRepositories();
  }, []);

  async function getRepositories() {
    try {
      const { data } = await api.get(`users/${userName}/repos`);

      const projectsFormated = data.map(e => {
        return {
          nome: e.full_name,
          url: e.html_url
        }
      })

      setProjects(projectsFormated)

    } catch(e) {
      console.log(e)
    }
  }

  return (
      <Container>
        <div className="titleContainer">
          <h2>Todos os projetos de {userName}</h2>
        </div>
        {projects.map(e => (
        <Card onClick={() => window.open(e.url)}>
          <div>
            <p>{e.nome}</p>
          </div>
          <div>
            <img  src={ArrowSvg} />
          </div>
        </Card>
        ))}
      </Container>
  );
}