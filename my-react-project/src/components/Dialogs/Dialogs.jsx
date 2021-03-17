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

  let messagesData = [
    {id: 1, msg: 'And all the girlies'},
    {id: 2, msg: 'say I`m pretty fly'},
    {id: 3, msg: 'for a white guy'}
 ]

  

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>

        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />

      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].msg} />
        <Message message={messagesData[1].msg} />
        <Message message={messagesData[2].msg} />
      </div>
    </div>
  )
}

export default Dialogs;
