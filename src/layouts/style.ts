import styled from "styled-components";

const RootLayoutStyle = styled.div`
  background-image: url(${(props) => props.theme.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  transition: background-image 0.3s ease;

  nav {
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.theme.navBackground};
    backdrop-filter: blur(10px);
    border-bottom: 1px solid ${(props) => props.theme.navBorder};
    box-shadow: 0 4px 6px ${(props) => props.theme.shadowColor};
    transition: all 0.3s ease;

    .title {
      font-size: 24px;
      font-weight: 600;
      color: ${(props) => props.theme.textPrimary};
      margin: 0;
      transition: color 0.3s ease;
    }

    .theme-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border: none;
      border-radius: 50%;
      background: ${(props) => props.theme.cardBackground};
      color: ${(props) => props.theme.textPrimary};
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px ${(props) => props.theme.shadowColor};

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 12px ${(props) => props.theme.shadowColor};
      }

      &:active {
        transform: scale(0.95);
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  main {
    #main-container {
      width: 100%;
      max-width: 768px;
      margin: 0 auto;
      padding-inline: 16px;
      padding-bottom: 28px;
    }
  }
`;

export default RootLayoutStyle;
