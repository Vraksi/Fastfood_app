﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FastFoodAppServer.Models;

namespace FastFoodAppServer.Models.Generated_Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AspNetUserLoginsController : ControllerBase
    {
        private readonly FastFoodAppServerContext _context;

        public AspNetUserLoginsController(FastFoodAppServerContext context)
        {
            _context = context;
        }

        // GET: api/AspNetUserLogins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AspNetUserLogins>>> GetAspNetUserLogins()
        {
            return await _context.AspNetUserLogins.ToListAsync();
        }

        // GET: api/AspNetUserLogins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AspNetUserLogins>> GetAspNetUserLogins(string id)
        {
            var aspNetUserLogins = await _context.AspNetUserLogins.FindAsync(id);

            if (aspNetUserLogins == null)
            {
                return NotFound();
            }

            return aspNetUserLogins;
        }

        // PUT: api/AspNetUserLogins/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAspNetUserLogins(string id, AspNetUserLogins aspNetUserLogins)
        {
            if (id != aspNetUserLogins.LoginProvider)
            {
                return BadRequest();
            }

            _context.Entry(aspNetUserLogins).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AspNetUserLoginsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AspNetUserLogins
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<AspNetUserLogins>> PostAspNetUserLogins(AspNetUserLogins aspNetUserLogins)
        {
            _context.AspNetUserLogins.Add(aspNetUserLogins);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AspNetUserLoginsExists(aspNetUserLogins.LoginProvider))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAspNetUserLogins", new { id = aspNetUserLogins.LoginProvider }, aspNetUserLogins);
        }

        // DELETE: api/AspNetUserLogins/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AspNetUserLogins>> DeleteAspNetUserLogins(string id)
        {
            var aspNetUserLogins = await _context.AspNetUserLogins.FindAsync(id);
            if (aspNetUserLogins == null)
            {
                return NotFound();
            }

            _context.AspNetUserLogins.Remove(aspNetUserLogins);
            await _context.SaveChangesAsync();

            return aspNetUserLogins;
        }

        private bool AspNetUserLoginsExists(string id)
        {
            return _context.AspNetUserLogins.Any(e => e.LoginProvider == id);
        }
    }
}
