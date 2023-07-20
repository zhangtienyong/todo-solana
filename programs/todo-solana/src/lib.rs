use anchor_lang::prelude::*;

declare_id!("whziJcQhKnJs9r8ZXM9Um39mbPsaRUamxGq4SXy4EcV");

#[program]
pub mod todo_solana {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
