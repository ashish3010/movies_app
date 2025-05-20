import { css } from '@emotion/react'

export const iFrameStyle = css`
  .video{
    width: calc(100vw - 300px);
    height:600px;
  }
  @media (max-width:1200px){
    .video{
      width: calc(100vw - 55px);
    }
  }
`