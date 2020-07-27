import styled from "styled-components"

const PostStyles = styled.div`
  .post_header {
    /* margin-top: 70px; */
    margin-bottom: 0px;
    font-size: 6rem;
    letter-spacing: -0.5rem;
    font-weight: bold;
  }

  .post {
    padding-top: 70px;
    width: 100%;
    margin-bottom: 0px;
    /* border: 1px solid yellowgreen; */
  }

  button {
    font-size: 1.5rem;
  }

  /*  --- Media Queries === */
  @media (max-width: 500px) {
    button {
      font-size: 1rem;
    }
  }
`

export default PostStyles
