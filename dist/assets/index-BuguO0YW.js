(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("requestButton"),r=document.getElementById("responseLabel");n.addEventListener("click",async()=>{try{const o=await fetch("https://escom-ia.onrender.com/api/status");if(!o.ok)throw new Error("Error en la petición");const s=await o.json();r.textContent=s.mensaje,n.id="requestButtonOK",n.textContent="IS ALIVE!!!"}catch(o){r.textContent=`Error!!!: ${o.message}`,n.textContent="IS DEAD!!!"}})});