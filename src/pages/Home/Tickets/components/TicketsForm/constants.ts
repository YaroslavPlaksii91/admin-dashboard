export const TICKETS_FORM_FIELDS = Object.freeze({
  TITLE: 'title',
  NAME: 'name',
  DATE: 'date',
  PRIORITY: 'priority',
});

export const TICKETS_FORM_CONFIG = Object.freeze({
  [TICKETS_FORM_FIELDS.TITLE]: {
    label: 'Ticket details',
    type: 'text',
    name: 'title',
    placeholder: 'Add description',
  },
  [TICKETS_FORM_FIELDS.NAME]: {
    label: 'Customer name',
    type: 'text',
    name: 'name',
    placeholder: 'Name',
  },
  [TICKETS_FORM_FIELDS.DATE]: {
    label: 'Date',
    name: 'date',
  },
  [TICKETS_FORM_FIELDS.PRIORITY]: {
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
