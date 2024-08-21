import { NavLink } from 'react-router-dom';
import styles from './Setting.module.scss';

const SettingNav = () => {
  return (
    <div className={styles.edit__navbar_of_pages}>
    <ul>
      <NavLink
        to="/setting/edit"
        className={({isActive}) =>
          isActive ? `${styles.activeYes}` : `${styles.activeNo}`
        }
      >
        Setting
      </NavLink>
      <NavLink
        to="/setting/subscription"
        className={({isActive}) =>
          isActive ? `${styles.activeYes}` : `${styles.activeNo}`
        }
        
      >
        My Subscription
      </NavLink>
      <NavLink
        to="/setting/support"
        className={({isActive}) =>
          isActive ? `${styles.activeYes}` : `${styles.activeNo}`
        }
        
      >
        Support
      </NavLink>

      <NavLink
        to="/setting/feature-request"
        className={({isActive}) =>
          isActive ? `${styles.activeYes}` : `${styles.activeNo}`
        }
       
      >
        Feature Request
      </NavLink>
    </ul>
  </div>
  )
}

export default SettingNav