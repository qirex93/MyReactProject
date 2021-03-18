import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  let dialogsData = [
     {id: 1, name: 'Yoda'},
     {id: 2, name: 'Boba-fett'},
     {id: 3, name: 'Tyler Durden'},
     {id: 4, name: 'Paul Atreides'},
     {id: 5, name: 'Borat'},
     {id: 6, name: 'Pamela'},
  ]

  let DialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
  

  let messagesData = [
    {id: 1, msg: 'And all the girlies'},
    {id: 2, msg: 'say I`m pretty fly'},
    {id: 3, msg: 'for a white guy'}
 ]

  let msgElements = messagesData.map( message => <Message message={message.msg} /> );

  

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {DialogsElements}
      </div>
      <div className={classes.messages}>
        {msgElements}
      </div>
    </div>
  )
}

export default Dialogs;
