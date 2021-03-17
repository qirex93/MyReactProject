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
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>

        <DialogItem name='Feofan' id='1'/>
        <DialogItem name='Bob' id='2'/>
        <DialogItem name='Tyler Durden' id='3'/>
        <DialogItem name='Paul Atreides' id='4'/>
        <DialogItem name='Borat' id='5'/>
        <DialogItem name='Pamela' id='6'/>

      </div>
      <div className={classes.messages}>
        <Message message='And all the girlies' />
        <Message message='say I`m pretty fly' />
        <Message message='for a white guy' />
      </div>
    </div>
  )
}

export default Dialogs;
