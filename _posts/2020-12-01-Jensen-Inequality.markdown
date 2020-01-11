---
layout: post
title:  "Pytorch Data Pipelining"
date:   2018-11-6 22:13:44 +0700
categories: none
---

Data pipelining is essential process in modern machine learning (i.e deep learning) processes, because every iteration of learning processes are usually running on a batch, we need to break our data into chunks to feed into the network graph. In this post we will explore data pipelining in pytorch, one of rising deep learning library.

