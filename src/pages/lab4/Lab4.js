// components
import Aside from '../../components/Aside/Aside';
import Main from '../../components/Main/Main';
import StyledNav from '../../components/StyledNav/StyledNav';

// styles
import styles from './Lab4.module.css';

export default function Lab4() {
  return (
    <div className={styles.content_wrapper}>
      <Aside className={styles.aside}>
        <StyledNav>
        
        </StyledNav>
      </Aside>
      
      {/* routes */}
      <Main>
      
      </Main>
    </div>
  );
}
