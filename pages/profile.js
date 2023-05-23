import styles from '../styles/profile.module.css';

function Profile({isDarkMode}) {
    return (
        <div className="container">
            <h1 className={`${styles.title} ${isDarkMode ? styles.dark : styles.light}`}>Profile</h1>
        </div>
    )
}

export default Profile;