const notificationMessages = {
  deadlineApproaching: {
    title: 'Signal - Deadline Alert',
    body: 'You have a deadline approaching!'
  },
  connectionError: {
    title: 'Signal - Connection Issue',
    body: 'Connection error. Please check your internet connection.'
  },
  welcome: {
    title: 'Signal - Welcome',
    body: 'Welcome to the Signal App!'
  },
  deadlineToday: {
    title: 'Signal - Deadline Today',
    body: 'You have a deadline today!'
  },
  deadlinePassed: {
    title: 'Signal - Deadline Passed',
    body: 'You have missed a deadline!'
  }
}

export async function showNotification(code) {
  try {
    const permission = await Notification.requestPermission()

    if (permission !== 'granted') {
      console.warn('Permissão de notificação negada')
      return
    }

    const { title, body } = notificationMessages[code] ?? notificationMessages.welcome

    new Notification(title, { body })
  } catch (err) {
    console.error(err)
  }
}
