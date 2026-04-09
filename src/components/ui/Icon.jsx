const icons = {
  spark: 'M11 3l1.8 3.6L16 8.4l-3.2 1.8L11 14l-1.8-3.8L6 8.4l3.2-1.8L11 3z',
  briefcase: 'M4 7h16v11H4V7zm5-3h6v3H9V4z',
  rocket: 'M12 2l3 3-2.5 2.5 3 3-6 6-3-3L4 16l8-14z',
  users: 'M7 11a3 3 0 100-6 3 3 0 000 6zm10 0a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 3-5 5-5s5 2 5 5H2zm10 0c0-3 3-5 5-5s5 2 5 5h-10z',
}

export default function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d={icons[name]} />
    </svg>
  )
}
