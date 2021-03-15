import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <div className={classes.dialog}>
          Feofan
        </div>
        <div className={classes.dialog + ' ' + classes.active}>
          Bob
        </div>
        <div className={classes.dialog}>
          Tyler Durden
        </div>
        <div className={classes.dialog}>
          Paul Atreides
        </div>
        <div className={classes.dialog}>
          Tyler Durden
        </div>
        <div className={classes.dialog}>
          Pamela
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>And all the girlies </div>
        <div className={classes.message}>say I'm pretty fly</div>
        <div className={classes.message}>for a white guy</div>
      </div>
    </div>
  )
}

export default Dialogs;
