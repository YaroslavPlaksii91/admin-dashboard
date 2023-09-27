export const ADD_TICKETS_FIELDS = Object.freeze({
  TITLE: 'title',
  NAME: 'name',
  DATE: 'date',
  PRIORITY: 'priority',
});

export const ADD_TICKETS_CONFIG = Object.freeze({
  [ADD_TICKETS_FIELDS.TITLE]: {
    label: 'Ticket details',
    type: 'text',
    name: 'title',
    placeholder: 'Add description',
  },
  [ADD_TICKETS_FIELDS.NAME]: {
    label: 'Customer name',
    type: 'text',
    name: 'name',
    placeholder: 'Name',
  },
  [ADD_TICKETS_FIELDS.DATE]: {
    label: 'Date',
    name: 'date',
  },
  [ADD_TICKETS_FIELDS.PRIORITY]: {
    label: 'Priority',
    name: 'priority',
    options: [
      {
        value: 'priority',
        label: 'Choose priority',
        disabled: true,
      },
      {
        value: 'high',
        label: 'High',
      },
      {
        value: 'low',
        label: 'Low',
      },
      {
        value: 'normal',
        label: 'Normal',
      },
    ],
  },
});
