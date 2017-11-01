/* @flow */
import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './ShareButtons.css'

export default class ShareButtons extends Component<{}> {

  url = () => {
		return "https://www.novoprotocol.com"
	}

	content = () => {
		return "@NovoProtocol: Business identity & credibility on the blockchain"
	}

	tweetText = () => {
		const truncatedTitle = this.content().length > 85 ? this.content().substring(0,85) + '...' : this.content()
		return truncatedTitle
	}

	twitterUrl = () => {
		return "https://twitter.com/intent/tweet?" +
           "text=" + encodeURIComponent(this.tweetText()) +
           "&url=" + this.url()
	}

	facebookUrl = () => {
		return "https://www.facebook.com/sharer.php?&u=" + this.url()
	}

  linkedinUrl = () => {
		return "https://www.linkedin.com/shareArticle?" +
           "&original_referer=" + encodeURIComponent(this.url()) +
           "&url=" + encodeURIComponent(this.url())
	}

	emailUrl = () => {
		const text = "Hey, have you seen Novo Protocol? They're bringing business identity and credibility to the blockchain. %0A%0A " + this.url()

		var subject = encodeURIComponent("Business credibility on the blockchain");
		return "mailto:?body=" + text + "&subject=" + subject;
	}

  render() {
    return (
      <div className='ShareButtons'>
        <Button as="a" href={this.twitterUrl()} target="_blank" color='twitter' size="big">
          <Icon name='twitter' /> Share on Twitter
        </Button>
        <Button as="a" href={this.linkedinUrl()} target="_blank" color='linkedin' size="big">
          <Icon name='linkedin' /> Share on Linkedin
        </Button>
        <Button as="a" href={this.emailUrl()} color='teal' size="big">
          <Icon name='mail outline' /> Share via email
        </Button>
      </div>
    );
  }
}
