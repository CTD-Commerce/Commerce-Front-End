import { Card, Container } from "react-bootstrap"
import "./styles.scss";
import { Helmet } from 'react-helmet-async';

const team = [
  {
    img: "https://avatars.githubusercontent.com/u/57917412?v=4",
    name: "Beatriz Abne Alqueres Cruz",
    linkedin: "https://www.linkedin.com/in/abne-b/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADea9DYBdiMQBuXbQzPczEW0JLT_F0g2fYc",
    github: "https://github.com/Abne-b"
  }, {
    img: "https://avatars.githubusercontent.com/u/80736581?v=4",
    name: "Dominic Lourenço Barbosa",
    linkedin: "https://www.linkedin.com/in/dominicbarbosa/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC-NgQgB2isCLGtuN9N6HAdX5qeG0uWCTCk",
    github: "https://github.com/DomBarbosa8"
  }, {
    img: "https://avatars.githubusercontent.com/u/85619404?v=4",
    name: "Eduardo Marcondes",
    linkedin: "",
    github: "https://github.com/eduardo-marcondes"
  }, {
    img: "https://avatars.githubusercontent.com/u/79822706?v=4",
    name: "Lucas Mendonça",
    linkedin: "",
    github: "https://github.com/iaeluk"
  }, {
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQFbvo2NOwxt5A/profile-displayphoto-shrink_800_800/0/1637115824971?e=1644451200&v=beta&t=cf4mmCtp-ppUG6XECGpi3UOhr7HZVMZCLwQYs4W56uI",
    name: "Murilo Cesar Machado",
    linkedin: "https://www.linkedin.com/in/murilo-c%C3%A9sar-machado/",
    github: "https://github.com/MuriloMuca"
  }, {
    img: "https://media-exp1.licdn.com/dms/image/C5603AQFM5pPqNlekSw/profile-displayphoto-shrink_400_400/0/1591327498381?e=1644451200&v=beta&t=dI0jS2HUtlQwFHeUgN9Zib7MAdlk3c0cVxpyHI3_iPU",
    name: "Rafaela Rodrigues",
    linkedin: "https://www.linkedin.com/in/rafaela-rodrigues-6915231a4/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC_Gdg0BGXInryIi7_kJStXfs4-dLI8yXm4",
    github: "https://github.com/Rafaela-Rodrigues"
  }
]

const TeamCards = () => {
  return (
    <>
      <Helmet>
        <title>UaiTatu | Sobre Nós</title>
      </Helmet>
      <h1>Team Tatu</h1>
      <Container fluid style={{ width: '90%', gap: '1.2rem', marginTop: '3rem' }} className="d-flex flex-wrap justify-content-center">
        {team.map(user =>

          <Card style={{ width: '20rem' }} id="userCard">
            <Card.Img variant="top" src={user.img} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                Web Developer
              </Card.Text>
            </Card.Body>

            <Card.Body id="iconSocial">
              <Card.Link target="_blank" href={user.linkedin}><img className="iconLinkedIn" src="https://www.freeiconspng.com/uploads/linkedin-logo-3.png" alt="linkedIn" /></Card.Link>
              <Card.Link target="_blank" href={user.github}><img className="iconGitHub" src="https://www.freeiconspng.com/uploads/github-logo-icon-20.png" alt="github" /></Card.Link>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  )
}
export default TeamCards