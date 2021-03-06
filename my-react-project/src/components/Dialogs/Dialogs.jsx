import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

  let DialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
  let msgElements = props.state.messages.map( message => <Message message={message.msg} /> );

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {DialogsElements }
      </div>
      <div className={classes.messages}>
        {msgElements}
      </div>
    </div>
  )
}

export default Dialogs;
