import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import colors from '../../../../layout/styled-components/colors'


const CardContent = styled.div`
  flex: 1;
  height: 150px;
  min-width: 300px;
  max-width: 300px;
  margin: 15px 15px;
  border-radius: 3px;
  box-shadow: 0px 10px 12px rgba(0,0,0,0.2);
  background-color: ${colors.white};
  position: relative;
  display: flex;
  flex-flow: column;
  padding: 15px;
  @media (max-width: 500px) {
    margin: 15px auto;
  }
  &:nth-child(1n) {
    background-image: ${colors.gradientGreen};
  }
  &:nth-child(2n) {
    background-image: ${colors.gradientBlue};
  }
  &:nth-child(3n) {
    background-image: ${colors.gradientPink};
  }
  &:nth-child(4n) {
    background-image: ${colors.gradientPurple};
  }
`;

const CardTop = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const CardBottom = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 20px;
`;

const Avatar = styled.div`
  flex: 1;
  max-width: 30%;
`;

const Name = styled.h1`
  font-size: 16px;
  flex: 1;
  max-width: 60%;
  text-transform: capitalize;
  padding-top: 20px;
  word-break: break-word;
`;

const Lock = styled.div`
  flex: 1;
  max-width: 10%;
  text-align: right;
  color: ${colors.lock};
`

const Image = styled.img`
  width: 60px;
  height: auto;
  border-radius: 50%;
  flex: 1;
`;

const Commits = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 50%;
`;

const LinkCommits = styled(Link)`
  text-decoration: none;
  padding-left: 5px;
`;

const Stars = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 50%;
  text-align: right;
`;

const Star = styled.i`
  color: yellow;
  padding-right: 5px;
`;

const Update = styled.div`
  margin-top: 5px;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 100%;
`;

const Card = (props) => (
  <CardContent>
    <CardTop>
      <Avatar>
        <Image src={props.avatar} alt={props.avatarUrl} />
      </Avatar>
      <Name>
        {props.name}
      </Name>
      <Lock>
      {
        !props.private ?
          <i className="fa fa-lock-open" /> : <i className="fa fa-lock-close" /> 
      }
      </Lock>
    </CardTop>
    <CardBottom>
      <Commits>
        <i className="fa fa-code-branch" />
        <LinkCommits to={'/repos/' + props.name}>Commits</LinkCommits>
      </Commits>
      <Stars>
        <Star className="fa fa-star" />
        {
          props.stars
        }
      </Stars>
      <Update>Last update: {dateFormat(props.update, 'dd/mm/yy')}</Update>
    </CardBottom>
  </CardContent>
)

export default Card;