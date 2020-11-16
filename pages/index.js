import Container from "../components/container";
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import Users from "../components/Users";

const Index = props => {
  // console.log(props)
  return (  
    <div>
      <Head>
        <title>NextJS Project - Home</title>
      </Head>
      <Container>
        <h1>Next</h1>
        <Users users={props.user} />
      </Container>  
    </div>  
     
  );
}

Index.getInitialProps = async ctx => {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json();  
  return { user: data.data  }
}

export default Index;
