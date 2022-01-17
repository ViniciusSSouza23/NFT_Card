import styled from "styled-components";

export const Container = styled.div`
    background: var(--card-bg);
    width: 18rem;
    height: 30rem;
   
    margin: 5rem 0 0 32rem;
    border-radius: 1rem;
    hr{
        color: var(--line-blue);
        margin-top: 0.8rem;
        size: 0.5px;
    }
    box-shadow: 0.1rem 0.1rem 0.1rem  var(--card-bg);
    .creation{
        color: var(--soft-blue);
        font-size: 14px;
        margin-left: 0.75rem;
    }
    .name{
        color: var(--white);
        font-size: 14px;
        :hover{
            color: var(--cyan);
            cursor: pointer;
        }
    }

`;
export const Image = styled.img`
    width: 15rem;
    height: 15rem;
    margin: 1.5rem 1rem 1rem 1.5rem;
    border-radius: 0.5rem;
  
`;
export const Title = styled.h3`
    margin: 0.5rem 0 0 1rem;
    color: var(--white);
    :hover{
        cursor: pointer;
        color: var(--cyan);
    }
`;
export const Paragraph = styled.p`
    color: var(--soft-blue);
    margin: 1rem;

`;
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    img{
        margin-left: 1rem;
    }
    div
    {
        display: flex;
        
    }
    
`;
export const Etherium = styled.span`
    color: var(--cyan);
    margin-left: 0.3rem;
    font-size: 14px;

`;
export const Time = styled.span`
    font-size: 14px;
    margin: 0 0.5rem 0 0.3rem;
    color: var(--soft-blue);
`;
export const Profilepic = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.75rem;
    margin-left: 1rem;
`;