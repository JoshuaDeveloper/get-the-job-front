import styled from '@emotion/styled'
import { typography } from 'assets/typography'
import CardCompany from 'components/CardCompany'
import CardJob from 'components/CardJob/indes'
import { useFollows } from 'context/FollowContext'
import React from 'react'
const Title = styled.h3`
  ${typography.regular.headline4};
  margin-bottom: 1rem;
`
const Wrapper = styled.div`
  margin-bottom: 1rem;
  .title {
    ${typography.regular.headline6};
  }
`
const ContainerCard = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`

export const FollowsPage = () => {
  const { follows } = useFollows();
  
  let hash = {};
  const followsRecruiter = follows.followsRecruiter.filter(o => hash[o.id] ? false : hash[o.id] = true);

  console.log(followsRecruiter)
  return (
    <main>
      <Title>Following</Title>
      <Wrapper>
        <h4 className='title'>You are following {follows.followsJob.length} jobs</h4>
        <ContainerCard>
          { follows.followsJob.map( follow => (
            <CardJob key={follow.id} {...follow}/>
          ))}
        </ContainerCard>
      </Wrapper>
      <Wrapper>
        <h4 className='title'>You are following {followsRecruiter.length} company</h4>
        <ContainerCard>
          {
            followsRecruiter.map( follows => (
              <CardCompany key={follows.id} {...follows} company={follows}/>
            ))
          }
        </ContainerCard>
      </Wrapper>
    </main>
  )
}
