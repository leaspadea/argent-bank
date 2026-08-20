import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Account from '../components/Account'
import { updateProfile } from '../features/auth/authSlice'

const accounts = [
  {
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
  },
]

function User() {
  const user = useSelector((state) => state.auth.user)
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const dispatch = useDispatch() 

  // ouvre l'édition en pré-remplissant les champs avec les valeurs du store
  const openEdit = () => {
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setIsEditing(true)
  }

  const handleSave = async (e) => {
  e.preventDefault()
  await dispatch(updateProfile({firstName, lastName}))
  setIsEditing(false)
}

  return (
    <main className="main bg-dark">
      <div className="header">
        {isEditing ? (
          <>
            <h1>Welcome back</h1>
            <form className="edit-form" onSubmit={handleSave}>
              <div className="edit-form-fields">
                <input type="text" aria-label="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" aria-label="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="edit-form-actions">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h1>Welcome back<br />{user?.firstName} {user?.lastName}!</h1>
            <button className="edit-button" onClick={openEdit}>Edit Name</button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account) => (
          <Account key={account.title} title={account.title} amount={account.amount} description={account.description} />
        ))}
    </main>
  )
}

export default User