import React from 'react';
import { List, Header} from "semantic-ui-react"

export const FetchedData = ({ fetchedData }) => {
  return (
    <List>
      {fetchedData.map(value => {
        return(
          <List.Item><Header>{value}</Header></List.Item>
        )
      })}
    </List>
  )
}