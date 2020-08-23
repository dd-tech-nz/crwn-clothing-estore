import { createSelector } from 'reselect'

const selectShop = state => state.directory

export const selectDirectorySections = createSelector(
  [selectShop],
  directory => directory.sections
)